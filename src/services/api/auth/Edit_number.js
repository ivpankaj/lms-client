import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const api = process.env.REACT_APP_API_URL; // Ensure you use the correct environment variable for React

export const Edit_number = async (formData) => {
  try {
    const token = Cookies.get('token');
    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(`${api}student/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Use Bearer prefix if required by your API
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update data');
    }

    Swal.fire({
      title: 'Success!',
      text: 'Your details have been updated.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      window.location.reload();
    });
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.message || 'An unknown error occurred',
      icon: 'error',
      confirmButtonText: 'Try Again',
    });
  }
};
