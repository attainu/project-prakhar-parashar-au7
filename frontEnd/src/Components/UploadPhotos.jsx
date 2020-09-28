import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import request from 'superagent';
import {saveAssetInfoToDB} from '../redux/Actions/uploadedAssetActions'

class PhotosUploader extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { uploadedPhotos: [] };
        this.photoId = 1;
    }

    render() {
        return (
            <div>
                
                        
                        <form>
                            {/* <div className="form_line">
                                <label path="title">Title:</label>
                                <div className="form_controls">
                                    <input
                                        type="text"
                                        ref={titleEl =>
                                            (this.titleEl = titleEl)
                                        }
                                        className="form-control"
                                        placeholder="Title"
                                    />
                                </div>
                            </div> */}
                            <div className="form_line">
                                <div className="form_controls">
                                    <div className="upload_button_holder">
                                        <label for="fileupload"><img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9023038671580097531-512.png "width="30" height="30"></img></label>
                                        <input style={{display:"none"}}
                                            type="file"
                                            id="fileupload"
                                            accept="image/*"
                                            multiple="multiple"
                                            ref={fileInputEl =>
                                                (this.fileInputEl = fileInputEl)
                                            }
                                            onChange={() =>
                                                
                                                this.onPhotoSelected(
                                                    this.fileInputEl.files
                                                )
                                            }
                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                      

            </div>
        );
    }

    onPhotoSelected(files) {
        console.log("photoSelected")
        console.log(files)
        const url = `https://api.cloudinary.com/v1_1/prakhar-parashar/upload`;
        const title = this.titleEl.value;

        for (let file of files) {
            //const photoId = this.photoId++;
            //const fileName = file.name;
            request.post(url)
                .field('upload_preset', 'otdrkocf')
                .field('file', file)
                .field('multiple', true)
                .field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                .field('context', title ? `photo=${title}` : '')
               // .on('progress', (progress) => this.onPhotoUploadProgress(photoId, file.name, progress))
                .end((error, response) => {
                    const publicId = JSON.parse(response.text).public_id
                    this.props.saveAssetInfoToDB(publicId, this.props.userId)
                  //  this.onPhotoUploaded(photoId, fileName, response);
                });
        }
    }
}
//     onPhotoUploadProgress(id, fileName, progress) {
//         this.props.onUpdateUploadedPhoto({
//             id: id,
//             fileName: fileName,
//             progress: progress,
//         });
//     }

//     onPhotoUploaded(id, fileName, response) {
//         this.props.onUpdateUploadedPhoto({
//             id: id,
//             fileName: fileName,
//             response: response,
//         });

//         this.props.onPhotosUploaded([response.body]);
//     }

//     static contextType = CloudinaryContext.contextType;
// }

// PhotosUploader.propTypes = {
//     uploadedPhotos: PropTypes.array,
//     onUpdateUploadedPhoto: PropTypes.func,
//     onPhotosUploaded: PropTypes.func,
// };

// const PhotosUploaderContainer = connect(
//     state => state,
//     {
//         onUpdateUploadedPhoto: updateUploadedPhoto,
//         onPhotosUploaded: photosUploaded,
//     }
// )(PhotosUploader);

// Object.assign(
//     PhotosUploaderContainer.contextTypes,
//     PhotosUploader.contextTypes
// );

const dispatchMapper = {
    saveAssetInfoToDB : saveAssetInfoToDB
}

export default connect(null, dispatchMapper)(PhotosUploader)
