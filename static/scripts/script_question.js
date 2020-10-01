console.log('connected')
window.onload = navig()

function navig() {
    console.log('enters navig')
    if((document.getElementById('next'))){
        document.getElementById('next').onclick = loadnext}
    else
        document.getElementById('submit').onclick = result
}



function loadnext() {
    console.log('phir aagya muh utha ke')
    const rbs = document.querySelectorAll('input[name="optionGroup"]');
    var ans = 'dummy'
    for (const rb of rbs) {
        if (rb.checked) {
            ans = rb.value;
            break;
        }
    }
    const page  = document.querySelector('input[class="Qno"]').value;
    console.log(page); 
    
    var csrftoken = getCookie('csrftoken');
    var req = new XMLHttpRequest();
    
    req.open('POST', '/savechoice/', true);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send('ans=' + ans + '&page='+page)
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location.href=this.responseText
        }
        else if(this.status==500){
            alert("Our Servers Seem to be down")
        }
    };
}

function uncheckall(obj) {
    var cbs = document.querySelectorAll('input[name="optionGroup"]');
    for (var i = 0; i < cbs.length; i++) {
        if(cbs[i]!=obj)
        	cbs[i].checked = false;
    }
}

function result()
{
    const rbs = document.querySelectorAll('input[name="optionGroup"]');
    var ans = 'dummy'
    for (const rb of rbs) {
        if (rb.checked) {
            ans = rb.value;
            break;
        }
    }
    const page  = document.querySelector('input[class="Qno"]').value;
    console.log(page); 

    var csrftoken = getCookie('csrftoken');
    var req = new XMLHttpRequest();
    
    req.open('POST', '/result/', true);
    req.setRequestHeader('X-CSRFToken', csrftoken);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send('ans=' + ans + '&page='+page)
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location.href=this.responseText
        }
        // else if(this.status==500){
        //     alert("Our Servers Seem to be down")
        // }
    };
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}