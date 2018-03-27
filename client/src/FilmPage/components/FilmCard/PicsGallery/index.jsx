
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

import Img from 'react-image';
import { CircularProgress } from 'material-ui/Progress';
import styles from './styles';
import { withStyles } from 'material-ui/styles';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    render() {
        return (
            <div className={this.state.classes.gallery}>
                <Img 
                    className={this.state.classes.pic}
                    src={this.props.images[0].src} 
                    onClick={(e) => this.openLightbox(0,e)}
                    loader={<CircularProgress />}
                />

                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>


        );
    }
}

Gallery.propTypes = {
    images: PropTypes.array,
};



export default withStyles(styles)(Gallery);
