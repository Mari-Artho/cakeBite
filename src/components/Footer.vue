<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <section class="footer">
        

        <div class="footer-layout">
            <ul class="contact">
                <h1> Cake Bite</h1>
                <li>Adress: Oishii street 1, Stockholm</li>
                <li>Phone: 0123456789</li>
                <li>Email: cafebite@daisuki.se</li>
            </ul>

            <ul class="sms-icon">
                <li><img src="../../public/images/instagram.svg" /></li>
                <li><img src="../../public/images/facebook.svg" /></li>
                <li><img src="../../public/images/tiktok.svg" /></li>
                <li><img src="../../public/images/pinterest.svg" /></li>
                <li><img src="../../public/images/youtube.svg" /></li>
            </ul>
        </div>
    </section>
    
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&display=swap');
@import '../assets/styles.scss';
.footer {
    background-color: $third-pink;
    min-height: 30vh;
    font-family: $sub-font;
    color: $text-grey;
}

.footer-layout {
    display: flex;
    justify-content: space-around;
}

img {
    width: 3rem;
    height: 3rem;
}

.contact {
    align-content: left;
}
.sms-icon {
    display: flex;
    margin-top: 7%;
}

li{
    list-style: none;
    padding: .5rem;
    text-align: left;
}

h1{
    text-align: left;
}
</style>
