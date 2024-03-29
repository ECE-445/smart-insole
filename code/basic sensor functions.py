'''
Helper function for gyroscope sensor values to help with rotation math
'''
def axis_angle_to_rotation_matrix(axis, angle):
    axis = axis / np.linalg.norm(axis)  # Normalize axis
    x, y, z = axis
    cos = np.cos(angle)
    sin = np.sin(angle)
    rotation_matrix = np.array([[cos + x**2*(1-cos), x*y*(1-cos) - z*sin, x*z*(1-cos) + y*sin],
                                [y*x*(1-cos) + z*sin, cos + y**2*(1-cos), y*z*(1-cos) - x*sin],
                                [z*x*(1-cos) - y*sin, z*y*(1-cos) + x*sin, cos + z**2*(1-cos)]])
    return rotation_matrix
'''
Function that takes in gyroscope sensor values (wx, wy, wz) as input and outputs a determined final orientation of the sensor.
Orientation will be helpful if you want to determine what direction the foot is facing for most of the hike (measure of uphillness and difficulty)
'''
def track_orientation(gyro_data):
    # Your implementation starts here:
    dt = 1/100 #depending on sampling rate
    df = pd.read_csv(gyro_data) 
    #pretend it is a CSV for now, how we extract the data from Bluetooth or SSd can vary, could just be an array
    data = df.values
    # Initialize total 3D rotation matrix
    R = np.eye(3)
    
    for i in range(len(data)):
        omega_x, omega_y, omega_z = data[i]  
        delta_theta = np.sqrt(omega_x**2 + omega_y**2 + omega_z**2) * dt 

        rotation_axis = np.array([omega_x, omega_y, omega_z])

        rotation_axis_global = np.dot(R, rotation_axis)

        delta_R = axis_angle_to_rotation_matrix(rotation_axis_global, delta_theta)
        #this is a self defined function that converts the gyroscope values to a rotation

        R = np.dot(delta_R, R)
    
    return R 


from scipy.signal import find_peaks

'''
Helper function to get the typical length of a step
'''
def get_step_length():
    height=1.75 # in meters
    return 0.415*height

'''
Function for the accelerometer data to calculate the number of steps a person has taken, which will be useful for displacement.
'''
def calculate_steps(accel_data):
    # deal with the DC offset
    accel_data['x'] -= accel_data['x'].mean()
    accel_data['y'] -= accel_data['y'].mean()
    accel_data['z'] -= accel_data['z'].mean()
    
    #extract the data readings
    accel_data['magnitude'] = np.linalg.norm(accel_data[['x','y','z']].values, axis=1)
    #smooth out some of the points
    accel_data['filtered_magnitude'] = accel_data['magnitude'].rolling(window=10, min_periods=1).mean()

    #adjust parameters for peak
    sampling_rate = 100 # Sampling rate of the accelerometer (need to verify)
    min_peak_distance_seconds = 0.5  # Minimum separation between adjacent peaks in seconds
    min_distance = int(min_peak_distance_seconds * sampling_rate)  # Convert to number of samples
    peaks, _ = find_peaks(accel_data['filtered_magnitude'], distance=min_distance)

    #extract the actual peak indices
    step_timestamps = accel_data.index[peaks].values
    
    #put in the format they want
    step_lengths = [get_step_length()] * len(step_timestamps)
    steps = pd.DataFrame({"timestamp": step_timestamps, "steplength": step_lengths})

    return steps

'''
Used to calculate the final ending spot for the person, and the accelerometer.
We can also use the accelerometer data in a different way, as just measuring the amount of force the person exerts on their foot/sensor throughout the hike,
and using that as valuable insight. The total displacement is jsut an example metric of what we can do with the accelerometer data.
'''
def calculate_final_position(data_from_step_function, start_position):
    
    #find what direction each step is being taken in using the walking direction angle, x is cos(theta) and y is sin(theta)
    dx = np.sum(data_from_step_function * np.cos(orientation_from_gyroscope_calculation))
    dy = np.sum(data_from_step_function * np.sin(orientation_from_gyroscope_calculation))

    displacement = (dx, dy)

    return displacement

