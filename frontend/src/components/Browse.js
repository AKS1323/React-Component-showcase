import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import "./Browse.css";
import app_config from './config';
const Browse = () => {

    const url = app_config.api_url;

    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const getDataFromBackend = async () => {
        setLoading(true);
        const res = await fetch(url + '/components/getall');
        const data = await res.json();
        setComponents(data);
        setLoading(false);
        console.log(data);
    }
    useEffect(() => {
        getDataFromBackend();
    }, [])

    const displayComponents = () => {
        if (!loading) {
            return components.map(({ _id, thumbnail, uploadedBy, title, description }) => (
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card mt-4">

                        <img src={url + "/" + thumbnail}
                            class="card-img-top" alt=" Component image" />
                        <div class="card-body">

                            <h4 class="mb-0">{title}</h4>
                            {/* <p class="text-dark fw-bold text-muted">{uploadedBy.fname} {uploadedBy.lname}</p> */}

                            <button className='btn btn-primary mt-5 float-end' onClick={e => navigate('/viewer/' + _id)}>View</button>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div className='browsebackground'>

            {/* header start */}
            <div>
                <header>


                    <div class=" browseheader p-5 text-center bg-image">
                        <div class="mask">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div class="text-white">

                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
            {/* header end */}

            {/* For Searchbar */}
            <div className='browsesearchbar' >
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>

            {/* For Product Cards */}
            <div>
                <section style={{ backgroundcolor: "#eee" }}>
                    <div class="container py-5">
                        <div class="row">

                            {displayComponents()}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Browse