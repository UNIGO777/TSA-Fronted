function isTokenValid() {
    const token = sessionStorage.getItem('authToken');
    const expiryTime = sessionStorage.getItem('tokenExpiry');
  
    if (!token || !expiryTime) {
      return false; // No token or expiry time
    }
  
    if (Date.now() > parseInt(expiryTime, 10)) {
      sessionStorage.removeItem('authToken'); // Remove expired token
      sessionStorage.removeItem('tokenExpiry');
      return false; // Token has expired
    }
  
    return true; // Token is valid
}
  

if (!isTokenValid()) {
    window.location.href = '/index.html'
}



const logoutbutton = document.getElementById('logoutbutton')


const logout =  () => {
    sessionStorage.removeItem('authToken'); // Remove expired token
    sessionStorage.removeItem('tokenExpiry');
    window.location.reload()
}