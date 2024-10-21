import { useAuth } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';

function Community() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <h1>Community</h1>
    </div>
  );
}

export default Community;
