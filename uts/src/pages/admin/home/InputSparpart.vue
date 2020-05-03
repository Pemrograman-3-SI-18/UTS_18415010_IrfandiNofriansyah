<template>
<q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Sparpart</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
        <q-input
            label="Kode Spartpart"
            lazy-rules
            color="teal"
            v-model="kodeSparpart"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan kode buku yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="description"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Sparpart"
            lazy-rules
            color="teal"
            v-model="jenisSparpart"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

           <q-input
            label="Stock Sparpart"
            lazy-rules
            color="teal"
            v-model="stockSparpart"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="recent_actors"/>
            </template>
          </q-input>

           <q-input
            label="Harga"
            lazy-rules
            color="teal"
            v-model="harga"
            :rules="[
           val => val !== null && val !== '' || 'Tuliskan judul buku yang inging ditambahkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Sparpart"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodeSparpart: null,
      jenisSparpart: null,
      stockSparpart: null,
      harga: null
    }
  }
}

</script>
