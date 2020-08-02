import React from 'react';
import './stylingProfile.css';
const profile = () => {
    return (
        <div>
            
            <div className="profile-page">
            
                 <nav className="navbar navbar-color-on-scroll     fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav">
        <div className="container">
            <div className="navbar-translate">
                <a className="navbar-brand" href="../index.html">Project </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="dropdown nav-item">
                    
                    </li>
      				<li class="nav-item">
      					<a className="nav-link" >
      						<i className="material-icons">cloud_download</i> Logout
      					</a>
      				</li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div className="page-header header-filter" data-parallax="true" ></div>
    <div className="main main-raised">
		<div className="profile-content">
            <div className="container">
                <div className="row">
	                <div className="col-md-6 ml-auto mr-auto">
        	           <div className="profile">
	                        <div className="avatar">
	                            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg" alt="Circle Image" class="img-raised rounded-circle img-fluid"/>
	                        </div>
	                        <div className="name">
	                            <h3 className="title">Hamza </h3>
								<h6>Designer</h6>
							   </div>
	                    </div>
    	            </div>
                </div>
                <div className="description text-center">
                    <p>An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
                </div>
				<div className="row">
					<div className="col-md-6 ml-auto mr-auto">
                        <div className="profile-tabs">
                          <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                                  <i className="material-icons">camera</i>
                                  RESULT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                                  <i className="material-icons">palette</i>
                                    STAGES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                                  <i className="material-icons">favorite</i>
                                    UNLOCK STAGES
                                </a>
                            </li>
                          </ul>
                        </div>
    	    	</div>
            </div>
        
          <div className="tab-content tab-space">
            <div className="tab-pane active text-center gallery" id="studio">
  				<div className="row">
  					<div className="col-md-3 ml-auto">
  					    <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded"/>
  						<img src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80" class="rounded"/>
  					</div>
  					<div className="col-md-3 mr-auto">
  						<img src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80" class="rounded"/>
  						<img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded"/>
  					</div>
  				</div>
  			</div>
            <div className="tab-pane text-center gallery" id="works">
      			<div className="row">
      				<div className="col-md-3 ml-auto">
                      <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded"/>
  					  <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded"/>
  					  <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" class="rounded"/>  					</div>
      				<div class="col-md-3 mr-auto">
                      <img src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" class="rounded"/>
                      <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" class="rounded"/>
      				</div>
      			</div>
  			</div>
            <div className="tab-pane text-center gallery" id="favorite">
      			<div className="row">
      				<div className="col-md-3 ml-auto">
      				  <img src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" class="rounded"/>
                      <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" class="rounded"/>
      				</div>
      				<div class="col-md-3 mr-auto">
      				  <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" class="rounded"/>  					
      				  <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" class="rounded"/>
  					  <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" class="rounded"/>
      			    </div>
      			</div>
      		</div>
          </div>

        
            </div>
        </div>
	</div>
	
	<footer className="footer text-center ">
        <p>Made with <a href="https://demos.creative-tim.com/material-kit/index.html" target="_blank">Hamza </a> by Creative Tim</p>
    </footer>
    
   
            </div>
    </div>        
        
    );
}
 
export default profile;