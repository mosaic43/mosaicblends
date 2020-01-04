import React from 'react';
// import { Link } from 'react-router-dom';




function Skincare() {
    return (
      <div className="skincare mx-auto">
        <div class="row">
        <div class="col col-md-12 subTitle">
         <h2>Essential oils for skincare</h2>    
        </div>
        </div>
        <br />
        <div class="row skintype">
        <div class="swatch2">Oily Skin</div>
        <div class="swatch1">Dry Skin</div>
        <div class="swatch3">Sensitive Skin</div>
        </div>
        <div class="row skintype">
        <div class="swatch4">Anti-Aging</div>
        <div class="swatch5">Toner</div>
        <div class="swatch6">Acne</div>
        </div>
        <br />
        <br />
        <div class="row">
        <div class="col col-md-12 subTitle">
        <h2>Carrier Oils skincare</h2>  
        </div>
        </div>
        <div class="row skintype">
        <div class="carrieroilswatch2">Oily Skin</div>
        <div class="carrieroilswatch1">Dry Skin</div>
        <div class="carrieroilswatch3">Sensitive Skin</div>
        </div>
        <div class="row skintype">
        <div class="carrieroilswatch4">Anti-Aging</div>
        <div class="carrieroilswatch5">Toner</div>
        <div class="carrieroilswatch6">Acne</div>
        </div>

        
      </div>
    );
  }
  
  export default Skincare;