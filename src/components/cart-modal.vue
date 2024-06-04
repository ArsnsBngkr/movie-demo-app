<template>
    <div id="cartModal" class="modal" >
        <div class=" modal-content">
            <div class="modal-header">
                <span class="close" @click="toggle">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-title">
                    {{ modalTitle }}
                </div>
                <div class="modal-info">
                    <slot/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['modalTitle','toggle'],
    data() {
        return {
           
        }
    },
    methods: {
     
    }
}

</script>

<style>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}

.modal-body {
    margin-top: 40px;
}

.modal-title {
    font-size: 36px;
    color: red;
}

.modal-info {
    margin-top: 20px;
}


.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>