import React, { Component } from 'react';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import { TextField, Button } from 'material-ui';
import styles from './posts.css';

class PostDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { postDetail } = nextProps;
    this.setState({
      title: postDetail.title,
      body: postDetail.body,
    });
  }

  openEditDialog = () => {
    this.setState({
      dialogOpen: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      dialogOpen: false,
    });
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleBody = (e) => {
    this.setState({
      body: e.target.value,
    });
  }

  onEdit = () => {
    const { postDetail, onEdit } = this.props;
    const { title, body } = this.state;
    const values = {
      title,
      body,
      id: postDetail.id,
      userId: postDetail.userId,
    };
    // console.log(values)
    onEdit(values);
  }

  render() {
    const { postDetail, postComments, openModal, hideModal } = this.props;
    const commentDOM = postComments.map((item) => {
      return (
        <li className="comment-item" key={item.id}>
          <img src={require(`../../assets/img/user/emoji-${Math.ceil((Math.random() * 12))}.png`)} alt="usericon" />
          <span className="comment-user">{item.name}</span>
          <p className="comment-body">{item.body}</p>
          <hr className="comment-hr" />
        </li>
      );
    });
    return (
      <div>
        <div className="list-item">
          <span className={styles.list_id_detail}>{postDetail.id}</span>
          <span className={styles.list_title_detail}>{postDetail.title}</span>
          <p className={styles.post_body_detail}>{postDetail.body}</p>
          <Button
            raised
            dense
            color="primary"
            className={styles.edit_btn}
            onClick={openModal}
          >
            编辑
          </Button>
        </div>
        <div className="list-item clearfix">
          <span className="comment-title">评论</span>
          <ul className="comment-list clear">
            {commentDOM}
          </ul>
        </div>
        { this.props.showModal ?
          <Dialog open onRequestClose={hideModal}>
            <DialogTitle className={styles.dialogTitle}>编辑</DialogTitle>
            {/* <Divider /> */}
            <DialogContent>
              <TextField
                id="title"
                defaultValue={postDetail.title}
                label="标题"
                InputProps={{ placeholder: '请输入标题' }}
                fullWidth
                onChange={this.handleTitle}
                margin="normal"
              />
              <TextField
                id="body"
                defaultValue={postDetail.body}
                label="正文"
                InputProps={{ placeholder: '请输入正文' }}
                fullWidth
                onChange={this.handleBody}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideModal} color="primary">
                取消
              </Button>
              <Button onClick={this.onEdit} color="primary">
                修改
              </Button>
            </DialogActions>
          </Dialog>
        : ''}
      </div>
    );
  }
}

export default PostDetailView;