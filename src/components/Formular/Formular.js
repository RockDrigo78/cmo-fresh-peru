import React from "react";
import "./Formular.css";

function Formular() {
  // When the user clicks the button, open the modal
  function openFormular() {
    document.getElementById("Formular-overlay").style.display = "block";
    document.querySelector("html").style.overflow = "hidden";
  }

  // When the user clicks on <span> (x), close the modal
  function closeFormular() {
    document.getElementById("Formular-overlay").style.display = "none";
    document.querySelector("html").style.overflow = "";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === document.getElementById("Formular-overlay")) {
      document.getElementById("Formular-overlay").style.display = "none";
      document.querySelector("html").style.overflow = "";
    }
  };

  return (
    <div className="Formular">
        
      <div className="d-flex justify-content-center">
        <button id="myBtn" onClick={openFormular} className="button">Click Here to Receive a Free Sample</button>
      </div>

      <div id="Formular-overlay" class="Formular-overlay">
          
        <div class="Formular-overlay-content">
          <div class="Formular-overlay-header">
            <span class="close" onClick={closeFormular}>
              &times;
            </span>
            <h2>Free Sample Formular</h2>
          </div>
          <div class="Formular-overlay-body">    
            <form action="/action_page.php">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Name.." required/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Last name.." required/>

                <label for="email">E Mail</label>
                <input type="email" id="email" name="email" placeholder="email.." required/>

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="germany">Germany</option>
                    <option value="mexico">Mexico</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="peru">Peru</option>
                </select>

                <label for="phonenumber">Telephone Number</label>
                <input type="number" id="phonenumber" name="phonenumber" placeholder="Phone number.."/>

                <input type="submit" value="Submit" />
            </form>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Formular;
