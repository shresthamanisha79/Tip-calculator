function calculateTip(){
	var billamount= Number(document.getElementById('bill').value);
	var tippercentage = document.getElementById('tipPercent').value;

	var totaltip = billamount * (tippercentage / 100);

	document.getElementById('totalTip').value = totaltip;
}
