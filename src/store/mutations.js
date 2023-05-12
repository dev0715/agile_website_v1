export default {
  SET_RESPONSE_FLAG (state, flag) {
    state.response_flag = flag
  },
  SET_LOADING_FLAG (state, flag) {
    state.loading = flag
  },
  SET_LOADING_TEXT (state, text) {
    state.loadingText = text
  }
}