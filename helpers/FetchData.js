const BASE_URL = 'http://tomaszgadek.com/api/students';

// Get information about grades of all students
export const fetchAllStudentsGrades = (that) => {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            that.setState({
                isFetching: false,
                students: json,
            });
        })
        .catch(e => {
            console.error(e);
        });
};

// Get information about grades of a specific student
export const fetchStudentGrades = (that) => {
    fetch(BASE_URL + "/" + that.props.itemId)
        .then(response => response.json())
        .then(json => {
            that.setState({
                student: json,
            });
        })
        .catch(e => {
            console.error(e);
        });
};
