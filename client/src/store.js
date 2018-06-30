import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'
import apollo from './apollo-client'

Vue.use(Vuex)

const state = {
  qualityProfiles: [],
  defaultQualityProfileId: 0
}

const mutations = {
  SET_PROFILES (state, { qualityProfiles }) {
      state.qualityProfiles = qualityProfiles
  },

  SET_DEFAULT_PROFILE (state, { qualityProfile }) {
      state.defaultQualityProfileId = qualityProfile.id
  }
}

const actions = {
  async getQualityProfiles({ commit }) {
    console.time('getQualityProfiles')

    const response = await apollo.query({
        query: gql`
          query GetProfiles {
            profiles {
              id
              name
            }
          }
        `
    })
    let qualityProfiles = response.data.profiles
    commit('SET_PROFILES', { qualityProfiles })

    console.timeEnd('getQualityProfiles')
  },

  async getDefaultQualityProfile({ commit }) {
    console.time('getDefaultQualityProfile')

    const response = await apollo.query({
        query: gql`
            query GetDefaultProfile($name: String!) {
            profiles(name: $name) {
                id
                name
            }
            }
        `,
        variables: {
            "name": "HD - 720p/1080p",
        }
    })
    let qualityProfile = response.data.profiles[0]
    commit('SET_DEFAULT_PROFILE', { qualityProfile })

    console.timeEnd('getDefaultQualityProfile')
  }
}

export default new Vuex.Store({
  state, mutations, actions
})