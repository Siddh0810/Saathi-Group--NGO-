function fun()
        {
            u=document.getElementById("user").value;
            m=document.getElementById("mob").value;
            e=document.getElementById("email").value;
            p=document.getElementById("pass").value;
            pat_u=/^[A-z]+$/;
            pat_m=/^\d{10}$/;
            pat_e=/^\w+([\._]?\w+)*@\w+([\._]?\w+)*(\.\w{2,3})+$/;
            pat=/\W+/;
            if(!pat_u.test(u))
            {
                
                alert("Username must only have alphabets")
                
            }
            if(!pat_m.test(m))
            {
                alert("Mobile Number must have 10 characters")
            }
            if(!pat_e.test(e))
            {
                alert("Email must be valid")
            }
            if(p.length>=8)
            {
                if(!pat.test(p))
                {
                    alert("Password must have special characters")
                }
            }
            else
            {
                alert("Password must be equal or greater than 8 characters")
            }
        }