import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { Button } from 'material-ui';
import styles from './albums.css';

class AlbumDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      thumbnailUrl: '',
      imgTitle: '',
    };
  }

  openEditDialog = () => {
    this.setState({
      dialogOpen: true,
    });
  }

  openAlbumDetailModal = (item) => {
    this.setState({
      thumbnailUrl: item.thumbnailUrl,
      imgTitle: item.title,
    });
    this.openEditDialog();
  }

  handleRequestClose = () => {
    this.setState({
      dialogOpen: false,
    });
  }

  render() {
    const { albumDetail } = this.props;
    const { thumbnailUrl, imgTitle } = this.state;
    const placeholderImg = (<img className={styles.album_img} src={require('../../assets/img/load.gif')} alt="" />)
    const albumDetailDOM = albumDetail.map((item) => {
      return (
        <li className="list-item" key={item.id} onClick={() => this.openAlbumDetailModal(item)}>
          <LazyLoad placeholder={placeholderImg}>
            <img className={styles.album_img} src={item.thumbnailUrl} alt="" />
          </LazyLoad>
          <span className={styles.album_detail_title}>{item.title}</span>
        </li>
      );
    });
    return (
      <div>
        <div className="clearfix">
          <img className={styles.albun_png} src={require('../../assets/img/album.png')} alt="" />
          {albumDetailDOM}
        </div>
          <Dialog open={this.state.dialogOpen} onRequestClose={this.handleRequestClose}>
            <DialogTitle className={styles.dialogTitle}>详情</DialogTitle>
            <DialogContent>
              <LazyLoad placeholder={placeholderImg}>
                <img className={styles.album_img_detail} src={thumbnailUrl} alt="" />
              </LazyLoad>
              <span className={styles.album_img_title}>{imgTitle}</span>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                确定
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    );
  }
}

export default AlbumDetailView;