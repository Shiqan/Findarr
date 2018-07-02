import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'
import apollo from './apollo-client'

Vue.use(Vuex)

const state = {
    // RADARR
    qualityProfiles: [],
    defaultQualityrofileId: 0,

    // TMDB 
    imagePath: "",
    backdropQualities: [],
    posterQualities: [],
    posterQuality: "",
    backdropQuality: ""
}

const mutations = {
  SET_PROFILES (state, { qualityProfiles }) {
      state.qualityProfiles = qualityProfiles
  },

  SET_DEFAULT_PROFILE (state, { qualityProfile }) {
      state.defaultQualityProfileId = qualityProfile.id
  },

  SET_IMAGE_SETTINGS (state, { config }) {
      state.imagePath = config.images.secure_base_url
      state.backdropQualities = config.images.backdrop_sizes
      state.posterQualities = config.images.poster_sizes
      state.posterQuality = config.images.poster_sizes[3] // TODO
      state.backdropQuality = config.images.backdrop_sizes[1] // TODO
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
  },

  async getImageSettings({ commit }) {
    console.time('getImageSettings')

    const response = await apollo.query({
        query: gql`
            query GetImageSettings {
                configuration {
                    images {
                        secure_base_url
                        poster_sizes
                        backdrop_sizes
                    }
                }
            }
        `
    })
    let config = response.data.configuration
    commit('SET_IMAGE_SETTINGS', { config })

    console.timeEnd('getImageSettings')
  }
}

export default new Vuex.Store({
  state, mutations, actions
})