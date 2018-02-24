import React from 'react';

/*
	*handleCallback(index, callback) 回调
		index 返回第几页
		callback 主要是异步操作
*/
//pageCount 一共有多少条
//pageNum 多少页
//aPages 只能看几页  默认 为5
//selectIndex 第几页了 从handleCallback 中 index 获取

class Pagelist extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
			liArr: [],
			activeClass: 0,
			unfoldShow: true,
			spliceNum: 1,
			propsPageNum: 0,
			handlePageShow: true, //防止点击页数时重复调用
			handleUnfoldShow: true, //防止点击展开时重复调用
			handleNextShow: true, //防止点击下一页时重复调用
			handleUpShow: true//防止点击上一页时重复调用
		}
	}

	componentDidMount() {
		const { aPages, pageNum } = this.props;
		let copyLiArr = [];
		if(aPages >= pageNum ) {
			for(let i = 0; i < pageNum; i++) {
				copyLiArr.push(i);
			}
		} else {
			for(let i = 0; i < aPages; i++) {
				copyLiArr.push(i);
			}
		}

		this.setState({
			liArr: copyLiArr,
			propsPageNum: pageNum
		});
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.pageNum != this.state.propsPageNum || this.state.activeClass != nextProps.selectIndex ) {
			// if(nextProps.pageNum <= nextProps.aPages ) {

			let copyLiArr = [];
			if(nextProps.aPages >= nextProps.pageNum) {
				for(let i = 0; i < nextProps.pageNum; i++) {
					copyLiArr.push(i);
				}
			} else {
				for(let i = 0; i < nextProps.aPages; i++) {
					copyLiArr.push(i);
				}
			}

			this.setState({
				liArr: copyLiArr,
				activeClass: 0,
				unfoldShow: true,
				spliceNum: 1,
				propsPageNum: nextProps.pageNum
			});
		}
	}

	handlePage(index) {
		const { handleCallback, selectIndex } = this.props;
		const { handlePageShow } = this.state;

		if(handlePageShow && index != selectIndex) { //防止重复调用
			this.setState({
				handlePageShow: false
			});
			handleCallback(index, () => {
				this.setState({
					activeClass: index,
					handlePageShow: true
				});
			});
		}
	}

	handleUnfold() {
		const { aPages, pageNum, handleCallback, selectIndex }  = this.props;
		const { liArr, activeClass, spliceNum, handleUnfoldShow } = this.state;

		if(handleUnfoldShow) {//防止重复调用
			this.setState({
				handleUnfoldShow: false
			});
			handleCallback(aPages * this.state.spliceNum, () => {
				let copyLiArr = [];
				for(let i = 0; i < pageNum; i++) {
					copyLiArr.push(i);
				}

				const spliceLiArr = copyLiArr.splice(aPages * this.state.spliceNum, aPages);

				if(spliceLiArr[0] + aPages >= pageNum) {
					this.setState({
						unfoldShow: false
					});
				}
				this.setState({
					liArr: spliceLiArr,
					spliceNum: this.state.spliceNum + 1,
					activeClass: spliceLiArr[0],
					handleUnfoldShow: true
				});

			});
		}
	}

	handleUp() {
		const { aPages, pageNum, handleCallback } = this.props;
		const { liArr, activeClass, spliceNum, handleUpShow } = this.state;

		if(activeClass > 0) {
			if(handleUpShow) {
				this.setState({
					handleUpShow: false
				});
				handleCallback(activeClass - 1, () => {
					if(liArr[0] == activeClass) {
						let copyLiArr = [];
						for(let i = 0; i < pageNum; i++) {
							copyLiArr.push(i);
						}

						this.setState({
							liArr: copyLiArr.splice(liArr[0] - aPages, aPages),
							spliceNum: spliceNum - 1,
							unfoldShow: true
						});
					}

					this.setState({
						activeClass: activeClass - 1,
						handleUpShow: true
					});
				})
			}
		}
	}

	handleNext() {
		const {  aPages, pageNum, handleCallback, selectIndex } = this.props;
		const { activeClass, spliceNum, handleNextShow } = this.state;

		if(activeClass+ 1 < pageNum) {
			if(handleNextShow) {
				this.setState({
					handleNextShow: false
				});

				handleCallback(activeClass + 1, () => {
					if(activeClass+2 >=  pageNum || activeClass+aPages >=  pageNum) {
						this.setState({
							unfoldShow: false
						});
					}

					if(aPages * spliceNum == activeClass + 1) {
						let copyLiArr = [];
						for(let i = 0; i < pageNum; i++) {
							copyLiArr.push(i);
						}

						this.setState({
							liArr: copyLiArr.splice(aPages * spliceNum, aPages),
							spliceNum: spliceNum + 1
						});
					}

					this.setState({
						activeClass: activeClass + 1,
						handleNextShow: true
					});

				});
			}
		}

	}
	render() {
		const {liArr, activeClass, unfoldShow} = this.state;
		const { selectIndex = 0, aPages, pageNum } = this.props;

		let pageLi = liArr.map((res, index) => {
			let copyActiveClass = (selectIndex == res ? 'li select-li' : 'li');
			return <li className={ copyActiveClass } key={index} onClick={() => this.handlePage(res)} >{ res+1 }</li>;
		})

		return pageNum > 1 ? <div className="ui-pagination">
						<div className="up-li" onClick={() => this.handleUp()}>上一页</div>
						<ul className="list">
							{
								pageLi
							}
						</ul>
						{
							pageNum > aPages && unfoldShow ? <div className="ui-unfold-block" onClick={() => this.handleUnfold()}>...</div> : ''
						}

						<div  className="next-li" onClick={() => this.handleNext()}>下一页</div>
					</div> : ''

	}
};


export default Pagelist;