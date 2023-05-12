<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<template>
  <transition name="modal-popup-fade">
    <div class="modal-popup-container">
      <div class="modal-popup" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-popup-header" id="modalTitle">
          <slot name="header">
            This is the default title.
          </slot>
          <button type="button" class="modal-popup-btn-close" @click="close" aria-label="Close modal">
            x
          </button>
        </header>

        <div class="modal-popup-body">
          <section class="modal-popup-text" id="modalDescription">
            <slot name="text">
              This is the default body.
            </slot>
            <a href="https://railflow.io" class="modal-popup-btn-checkout">Check out Railflow</a>
          </section>

          <section class="modal-popup-image" id="modalImage">
            <slot name="image">
              <!-- Default image loaded -->
              <img src="../../assets/images/pangolin/pangolin_railflow.jpg" alt="Pangolin is now Railflow" />
            </slot>
          </section>
        </div>
      </div>
      <div class="modal-popup-backdrop" @click="close" />
    </div>
  </transition>
</template>

<style>
.modal-popup-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-popup-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal-popup {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.modal-popup-header {
  padding: 1rem;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modal-popup-header p {
  color: #000;
  margin: 0;
}

.modal-popup-body {
  position: relative;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
}

.modal-popup-text {
  margin-bottom: 0;
  margin-right: 1rem;
  padding-left: 0.4rem;
}

.modal-popup-text p {
  color: #707070;
}

.modal-popup-text li {
  margin-bottom: 0.6rem;
}

.modal-popup-image img {
  max-width: 400px;
}

.modal-popup-btn-close {
  position: absolute;
  top: -3rem;
  right: -3rem;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  width: 50px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: transparent;
  z-index: 10;
}
.modal-popup-btn-close:hover,
.modal-popup-btn-close:focus {
  background: #99999930;
}

.modal-popup-fade-enter,
.modal-popup-fade-leave-to {
  opacity: 0;
}

.modal-popup-fade-enter-active,
.modal-popup-fade-leave-active {
  transition: opacity 0.5s ease;
}

a.modal-popup-btn-checkout {
  background-color: #303fe1;
  color: #fff;
  padding: 0.625rem 1.5625rem;
  font-size: 1rem;
  border-radius: 5px;
  display: inline-block;
  margin-top: 0.5rem;
}

a.modal-popup-btn-checkout:hover,
a.modal-popup-btn-checkout:focus {
  opacity: 0.9;
}

@media only screen and (max-width: 900px) {
  .modal-popup-container {
    align-items: flex-start;
    overflow-y: scroll;
  }

  .modal-popup {
    max-width: 100vw;
  }

  .modal-popup-body {
    flex-direction: column;
  }
  .modal-popup-text {
    margin-bottom: 1rem;
  }
  .modal-popup-text,
  .modal-popup-image img {
    max-width: 100%;
  }

  .modal-popup-btn-close {
    position: relative;
    top: 0;
    right: 0;
    background-color: #999999;
  }
}

@media only screen and (min-width: 400px) and (max-width: 900px) {
  .modal-popup-image img {
    max-width: 400px;
  }
}
</style>
