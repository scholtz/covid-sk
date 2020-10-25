<template>
    <div>
        <div class="search-wrapper" v-bind:class="{ active: searchOpen }">
            <div class="input-holder">
                <input type="text" class="search-input" placeholder="Type to search"/>
                <button class="search-icon" v-on:click="searchOpen = !searchOpen"><span/></button>
            </div>
            <button class="close" v-on:click="searchOpen = !searchOpen"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchOpen: false,
            }
        },
    }
</script>

