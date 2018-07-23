let city = '北京';

try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (e) {
  alert(e);
}

export default {
  city: city
}
