<template>
  <modal
    name="user-settings-component-modal"
    :width="400"
    :height="'auto'"
    :classes="'user-settings-component-modal'"
  >
    <p>Change your profile picture</p>
    <div class="user-settings-component-modal__wrapper">
      <img
        class="user-settings-component-modal__wrapper-img"
        :src="profilePicture"
        alt="User avatar"
      >
    </div>
    <div class="user-settings-component-modal__controls">
      <input
        ref="inputFile"
        type="file"
        :disabled="isSaving"
        accept="image/*"
        class="user-settings-component-modal__controls-input"
        @change="onChangeUpload"
      >

      <ButtonComponent
        class="user-settings-component-modal__controls-button"
        @click="$modal.hide('user-settings-component-modal')"
      >
        Close
      </ButtonComponent>
    </div>
  </modal>
</template>

<script>
import { ButtonComponent } from '@/components/basicComponents'
import { imageSources } from '@/utils/constants'

export default {
  name: 'UserSettingsComponentModal',
  components: { ButtonComponent },

  props: {
    avatarImageSrc: {
      type: String,
      required: true
    },
    isSaving: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    profilePicture () {
      return this.avatarImageSrc || imageSources.AVATAR_IMAGE_SRC
    }
  },

  watch: {
    isSaving (newIsSaving) {
      if (!newIsSaving) {
        this.$refs.inputFile.value = null
      }
    }
  },

  methods: {
    async onChangeUpload (event) {
      const [imageObject] = event.target.files
      this.$emit('uploadImageToCloud', imageObject)
    }
  }

}
</script>

<style lang="scss">
.user-settings-component-modal {
  padding: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__wrapper {
    padding: 40px;
  }

  &__wrapper-img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__controls {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-wrap: wrap;
    row-gap: 10px;
  }

  &__controls-input {
    background-color: $color-purple-dark;
    font-size: $font-size-base;
    color: $color-white;
    padding: 6px 10px;
    text-transform: uppercase;
    border: 1px solid $color-purple;
    border-radius: 4px;

    &:hover {
      background-color: $color-purple;
      color: $color-white;
    }

    &:disabled {
      pointer-events: none;
      filter: grayscale(100%);
    }
  }
}

</style>
