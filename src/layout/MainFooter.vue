<template>
  <footer class="main-footer-container">
    <div class="grid grid-cols-12 pt-6 pb-6 pl-12 pr-12">
      <div class="col-span-7 xs-order-1 xs-12">
        <div class="grid grid-cols-12 xs-order-1 p-7">
          <div class="col-span-5 col-end-5 xs-order-1 sm-order-1 md-order-1 lg-order-1 xs-12 sm-12 md-12 lg-12"><img
              src="/contact.webp" width="250" class="height-100" alt="contact">
          </div>
          <div
            class="contact-container col-span-7 col-start-5 xs-order-2 sm-order-2 md-order-2 lg-order-2 xs-12 sm-12 md-12 lg-12 xl-pl-5">
            <div><span class="font-bold">İletişim </span><br>
              <span style="font-size:.8rem">Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı
                Cad. Kuluçka
                Merkezi D2 Blok No:
                151/1F İç Kapı No: 2B03
                Esenler/İstanbul</span>
            </div>
            <div>Email: bilgi@tesodev.com</div>
          </div>
        </div>
      </div>
      <div class="col-span-5 xs-order-2 xs-12"><iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1551267054669"
          frameborder="0" style="height:100%; width: 100%; border-width: 0px; border-style: initial;"
          allowfullscreen=""></iframe>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/styles/global.scss";

.main-footer-container {
  background-color: var(--color-blue);
  width: 100%;

  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.2;
    padding: 1rem 1rem 1rem 1rem;
    color: var(--color-white)
  }
}

@media only screen and (max-width: $xs) {
  .top-news-container {
    padding: 0rem 1rem !important;
  }
}

@media only screen and (min-width: $xs) and (max-width: $sm) {
  .top-news-container {
    padding: 0rem 3rem;
  }
}
</style>
