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
            q1elem = document.getElementById("q1");
            q2elem = document.getElementById("q2");
            q3elem = document.getElementById("q3");
            q4elem = document.getElementById("q4");
            q5elem = document.getElementById("q5");
            q6elem = document.getElementById("q6");
            t1elem = document.getElementById("t1");
            answer = t1elem.value;
            alert(answer);
        }