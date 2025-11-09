'use client';
import React, { useState, useEffect } from 'react';

export default function InfoClient({ initialData }) {
  const [lang, setLang] = useState('en');
  const data = initialData;

  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  if (!data) return <div className="text-center py-5">Loading...</div>;


  return (
    <div className="py-4">
      <div className="d-flex justify-content-end mb-3">
        <div className="btn-group" role="group">
          <button className={"btn btn-outline-secondary " + (lang==='en'?'active':'')} onClick={()=>setLang('en')}>EN</button>
          <button className={"btn btn-outline-secondary " + (lang==='th'?'active':'')} onClick={()=>setLang('th')}>TH</button>
        </div>
      </div>

      <div id="carousel" className="carousel slide mb-3" data-bs-ride="carousel">
        <div className="carousel-inner rounded">
          {data.images.map((img,i)=>(<div key={i} className={"carousel-item " + (i===0?'active':'')}>
            <img src={img} className="d-block w-100 rounded" style={{maxHeight:520,objectFit:'cover'}} alt={"img"+i}/>
          </div>))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="fw-bold">{data.title[lang]}</h2>
      <p className="text-muted">{data.description[lang]}</p>
      <h4 className="text-primary">Price: <span className="fw-bold">{data.priceDisplay}</span></h4>
      <p><strong>Location:</strong> {data.location}</p>

      <div className="card mt-4 shadow-sm">
        <div className="card-body d-flex align-items-center">
          <img src={data.agent.avatar} width="84" height="84" className="rounded-circle me-3 border" alt="agent"/>
          <div>
            <div className="fw-bold">{data.agent.name}</div>
            <div className="text-muted small">Agent</div>
            <div className="mt-2 d-flex gap-2">
              <a href={`tel:${data.agent.phone}`} className="btn btn-outline-success btn-sm">Call</a>
              <a href={`mailto:${data.agent.email}`} className="btn btn-outline-primary btn-sm">Email</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h6 className="fw-bold">Google Map</h6>
        <div className="ratio ratio-4x3 border rounded">
          <iframe src={data.mapEmbed} style={{border:0}} loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}
