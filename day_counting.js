function day_of_year (d) {
	var months = [ "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec" ];
	var days_month = { "jan":31, "feb":28, "mar":31, "apr":30, "may":31, "jun":30,
					   "jul":31, "aug":31, "sep":30, "oct":31, "nov":30, "dec":31 };
	var m = d.getMonth();
	var day = d.getDate();
	var y = d.getYear();
	if (is_a_leap_year(y)) {
		days_month["feb"]=29;
	}
	for (var i=0; i<m; i++) {
		day += days_month[months[i]];
	}
	return day;
}


function is_a_leap_year(year) {

	if (year%400 === 0) {
		return true;
	} else if (year%100 === 0) {
		return false;
	} else if (year%4 === 0) {
      return true;
   } else {
      return false;
   }

}
