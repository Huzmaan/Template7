import React from 'react'

const Price = () => {
    return (
        <div className="price-css">
            <h3>My Price</h3>
            <div className="Main-card">
            <card className="card-css">   
  <div className="card-title">
    <h1>Basic</h1>
    <p className="card-description">Web Design</p>
    <p className="card-description">Photography</p>
    <p className="card-description">5GB Storage</p>
    <p className="card-description">Mail Support</p>
<p className="card">
    $10
    <br/>
    per month
</p>
<div className="card-btn-css">
    <button className="btn" variant="primary">Sign up</button>
  </div>
  </div>
</card>
<card className="card-css">
    <div className="card-title">
        <h2>Pro</h2>
        <p className="card-description">Web Design</p>
        <p className="card-description">Photography</p>
        <p className="card-description">50GB storage</p>
        <p className="card-description">Endless Support</p>
        <p className="card">
            $25
            <br/>
            per month
        </p>
        <div className="card-btn-css">
<button className="btn" variant="primary">Sign up</button>
    </div>
    </div>
</card>
</div>
        </div>
    )
}

export default Price
