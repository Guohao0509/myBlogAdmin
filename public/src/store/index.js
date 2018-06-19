var store = {
  state: {
    adminInfo: 123
  },
  setAdminInfoAction (adminInfo) {
    this.state.adminInfo = adminInfo;
  },
  getAdminInfoAction () {
    return this.state.adminInfo;
  },
  clearAdminInfoAction () {
    this.state.adminInfo = {};
  }
}

console.log('this is store');

export default store;