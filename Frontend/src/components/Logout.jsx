import React from 'react';
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            // Clear the user's authentication state
            setAuthUser({
                ...authUser,
                user: null,
            });

            // Remove user data from local storage
            localStorage.removeItem("Users");

            // Display success message
            toast.success("Logout successfully");

            // Close modal if it exists
            const modal = document.getElementById("my_modal_3");
            if (modal) {
                modal.close();
            }

            // Reload the page after a delay
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            // Handle and display error
            toast.error("Error: " + error.message);
        }
    };

    return (
        <>
            <div>
                <button
                    className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                    onClick={handleLogout}
                >
                    LogOut
                </button>
            </div>
        </>
    );
}

export default Logout;
