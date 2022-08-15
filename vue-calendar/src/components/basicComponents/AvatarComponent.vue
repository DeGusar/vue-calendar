<template>
  <div
    class="avatar-component"
    :style="avatarBackgroundStyle"
  >
    <div
      class="avatar-component__status"
      :style="statusBackgroundStyle"
    />
    <div
      v-if="!avatarImageSrc"
      class="avatar-component__initials"
    >
      {{ userInitials }}
    </div>
  </div>
</template>

<script>
import { stringToColor } from '@/utils/helpers/stringToColor'

export default {
  name: 'AvatarComponent',
  props: {
    userFullName: {
      type: String,
      required: true
    },
    avatarImageSrc: {
      type: String,
      default: ''
    },
    statusImageSrc: {
      type: String,
      required: true
    }
  },

  data: () => ({
  }),

  computed: {
    bgColor () {
      return stringToColor(this.userFullName)
    },
    userInitials () {
      return this.userFullName.split(' ').map(name => name[0]).join('')
    },
    avatarBackgroundStyle () {
      return this.avatarImageSrc ? `background: no-repeat center/cover url(${this.avatarImageSrc})` : `background-color: ${this.bgColor}`
    },
    statusBackgroundStyle () {
      return `background: no-repeat center/80% url(${this.statusImageSrc}) white`
    }
  }
}
</script>

<style lang="scss">
.avatar-component {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-white;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &__status {
    content: "";
    position: absolute;
    z-index: 10;
    right: 4%;
    bottom: -3%;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  &__initials {
    font-size: $font-size-base;
  }
}
    </style>
