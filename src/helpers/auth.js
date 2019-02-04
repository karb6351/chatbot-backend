export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
	return !!token;
};

export const isGuest = () => {
  const token = localStorage.getItem('token');
	return !token;
}

export const logout = () => {
  try{
    localStorage.removeItem("token");
    return true;
  }catch(error){
    return false;
  }
}