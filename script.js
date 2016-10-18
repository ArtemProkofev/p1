	function show_pic(){
                var c0_elem = document.getElementById("c0");
		var c1_elem = document.getElementById("c1");
		var c2_elem = document.getElementById("c2");
		var c3_elem = document.getElementById("c3");
		c0_elem.style.display='none';
		c1_elem.style.display='none';
		c2_elem.style.display = 'block';
		c3_elem.style.display = 'none';
		}
	function show_text(){
                var c0_elem = document.getElementById("c0");
		var c1_elem = document.getElementById("c1");
		var c2_elem = document.getElementById("c2");
		var c3_elem = document.getElementById("c3");
		c0_elem.style.display='none';
		c1_elem.style.display='block';
		c2_elem.style.display = 'none';
		c3_elem.style.display = 'none';
        }
    	function show_info(){
         	var c0_elem = document.getElementById("c0");
        	var c1_elem = document.getElementById("c1");
        	var c2_elem = document.getElementById("c2");
        	var c3_elem = document.getElementById("c3");
        	c0_elem.style.display='block';
        	c1_elem.style.display = 'none';
        	c2_elem.style.display = 'none';
        	c3_elem.style.display = 'none';
	}
    	function show_game(){
         	var c0_elem = document.getElementById("c0");
       	 	var c1_elem = document.getElementById("c1");
        	var c2_elem = document.getElementById("c2");
        	var c3_elem = document.getElementById("c3");
        	c0_elem.style.display='none';
        	c1_elem.style.display = 'none';
        	c2_elem.style.display = 'none';
        	c3_elem.style.display = 'block';
     }
        function check() {
	    var result = 0;
            q1elem = document.getElementById("q1");
            q2elem = document.getElementById("q2");
            q3elem = document.getElementById("q3");
            q4elem = document.getElementById("q4");
            q5elem = document.getElementById("q5");
            q6elem = document.getElementById("q6");
	    rr1elem = document.getElementById("rr1");
            rr2elem = document.getElementById("rr2");
            rr3elem = document.getElementById("rr3");
            rr4elem = document.getElementById("rr4");
            t1elem = document.getElementById("t1");
            if (q1elem.checked == false) result = result + 1;
	    if (q2elem.checked == false) result = result + 1;
	    if (q3elem.checked == true) result = result + 1;
	    if (q4elem.checked == true) result = result + 1;
	    if (q5elem.checked == false) result = result + 1;
            if (q6elem.checked == true) result = result + 1;
            if (rr1elem.checked == true) result = result + 1;
            if (t1elem.value == 'Sealand') result = result + 1; 
            alert(result);
        }
