<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
    <section class="footer">
        <div class="footer-layout">
            <ul class="contact">
                <h1 class="title"> Cake Bite</h1>
                <li>Address: Oishii street 1, Stockholm</li>
                <li>Phone: 0123456789</li>
                <li>Email: cafebite@daisuki.se</li>
                <p>Logo is <a href="https://www.designevo.com/"
                 title="free online logo maker">DesignEvo</a> by logo maker</p>
            </ul>
            
            <div>
                <h3 class="footer-follow">Follow us!</h3>
                <ul class="sms-icon">
                    <li><img src="../../public/images/instagram.svg" /></li>
                    <li><img src="../../public/images/facebook.svg" /></li>
                    <li><img src="../../public/images/tiktok.svg" /></li>
                    <li><img src="../../public/images/pinterest.svg" /></li>
                    <li><img src="../../public/images/youtube.svg" /></li>
                </ul>
            </div>
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

.title {
    text-align: center;
    margin-right: 3rem;
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

//----------Mobile-------------------------
@media screen and ( max-width:926px) {
.footer {
    text-align: center;
}
.footer-layout {
    display: flex;
    flex-direction: column;
}

.sms-icon {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
}

//----------Mobile Landscape:481px-760px(f.ex:GalaxyS10/iPhoneSE etc)--------
@media screen and (min-width:481px) and ( max-width:760px) {
.contact {
    align-content: center;
}
}

//----------Tablet------------------------------
@media screen and (min-width:810px) and ( max-width:1080px) {
.footer-layout {
    display: flex;
    flex-direction:row
}

.footer-follow {
    margin-top: 4rem;
}

.sms-icon {
    display: flex;
}

img {
    width: 2rem;
    height: 2rem;
}
}

//----------Tablet Landscape------------------------------
@media screen and (min-width: 1080px)  {
    .footer-follow {
    margin-top: 3rem;
}
}
</style>
