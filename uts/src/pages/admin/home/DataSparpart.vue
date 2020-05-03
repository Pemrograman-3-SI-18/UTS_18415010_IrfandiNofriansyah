<template>
 <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Tambah Data Spartpart" to="/admin/inputdata"/>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Sparpart',
          align: 'left',
          field: row => row.kodeSparpart,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'jenisSpartpart', align: 'center', label: 'Jenis  Sparpart', field: 'jenisSpartpart', sortable: true },
        { name: 'stockSparpart', align: 'center', label: 'Stock Sparpart', field: 'stockSparpart', sortable: true },
        { name: 'harga', align: 'center', label: 'Harga', field: 'harga' }
      ],
      data: [
        {
          kodeSparpart: 'BAA1',
          jenisSpartpart: 'Batre Hp Xiaomy',
          stockSparpart: '20',
          harga: 'Rp. 50.000'
        },
        {
          kodeSparpart: 'BAA2',
          jenisSpartpart: 'Casan Hp Xiaomy',
          stockSparpart: '30',
          harga: 'Rp. 25.000'
        },
        {
          kodeSparpart: 'BAA3',
          jenisSpartpart: 'Temper Glass Hp Xiaomy',
          stockSparpart: '30',
          harga: 'RP. 40.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
