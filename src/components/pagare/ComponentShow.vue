<template>
    <!--Button-->
    <a-button class="button-default" :disabled="disabled" @click="doChangeDescarga">
        DESCARGAR
    </a-button>
</template>

<!--=======Script=======-->
<script>
import {
    saveAs
} from "file-saver"

import {
    getSuccess,
    getResponse
} from "@/utils/index"

import {
    PostDescarga
} from "@/utils/request"

import {
    ShowPagareApi
} from "@/services/paths"

import axios from "axios"
import dayjs from "dayjs"

export default {
    data() {
        return {
            loading: false,
            disabled: false
        }
    },

    methods: {

        async doChangeDescarga() {

            this.disabled = true

            try {

                const { body, config } = PostDescarga(this.record)

                const response = await axios.post(ShowPagareApi, body, config)

                const blob = new Blob(

                    [response.data],

                    { type: 'application/pdf' })

                saveAs(blob, `PAGARE-${dayjs().format('YYYY-MM-DD HH_mm_ss')}`)

                getSuccess('Descargando')

            } catch (err) {

                console.error(err)

                getResponse(err)
            }

            this.disabled = false
        }
    },

    props: ["record"]
};
</script>