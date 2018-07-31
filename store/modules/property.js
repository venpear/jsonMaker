import property from '~/assets/actions/property'
import Vue from 'vue'
const vm = new Vue()

const state = {
  _propertiesArr: []
}

const getters = {
  propertiesArr: state => state._propertiesArr
}

const mutations = {
  _addProperty(state, obj) {
    state._propertiesArr.unshift(obj)
    vm.$message({
      message: '添加成功',
      type: 'success',
      duration: 1500
    })
  },
  _getProperties(state, arr) {
    state._propertiesArr = arr
  },
  _deleteProperty(state, index) {
    state._propertiesArr.splice(index, 1)
  }
}

const actions = {
  // 添加属性值
  async addProperty({ commit }, { apiId, name, type }) {
    await property
      .addProperty(apiId, name, type)
      .then(data => {
        commit('_addProperty', data)
      })
      .catch(() => {})
  },
  // 获取属性值
  async getProperties({ commit }, { apiId }) {
    await property
      .getProperties(apiId)
      .then(data => {
        for (const item of data) {
          item.value = ''
        }
        commit('_getProperties', data)
      })
      .catch(() => {})
  },
  // 删除属性值
  async deleteProperty({ commit }, { apiId, propertyId, index }) {
    await property
      .deleteProperty(apiId, propertyId)
      .then(() => {
        commit('_deleteProperty', index)
      })
      .catch(() => {})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
