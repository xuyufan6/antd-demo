import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';

class Buttons extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      loading: true,
      size: 'default'
    };
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  handleChange = e => {
    this.setState({
      size: e.target.value
    });
  };

  render() {
    const { loading, size } = this.state;
    return (
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">fangniuwa</Button>
          <Button type="default">fangniuwa</Button>
          <Button type="danger">fangniuwa</Button>
          <Button type="dashed">fangniuwa</Button>
          <Button disabled>fangniuwa</Button>
        </Card>
        <Card title="图像按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={loading} />
          <Button loading={loading}>点击加载</Button>{' '}
          <Button shape="circle" loading={loading} />
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮组" style={{ marginBottom: 10 }}>
          <Button.Group>
            <Button type="primary" icon="left">
              返回
            </Button>
            <Button type="primary" icon="right">
              前进
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">默认</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={size}>
            fangniuwa
          </Button>
          <Button type="default" size={size}>
            fangniuwa
          </Button>
          <Button type="dashed" size={size}>
            fangniuwa
          </Button>
          <Button type="delete" size={size}>
            fangniuwa
          </Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
