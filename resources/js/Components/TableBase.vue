<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex-1"
                                    v-for="col in columns"
                                    :key="col"
                                >
                                    <span>{{ col }}</span>
                                    <span></span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-if="rows.length <= 0">
                                <td
                                    colspan="3"
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center"
                                >Data not found...</td>
                            </tr>
                            <tr v-for="row in rows" :key="row">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                >{{ row.name }}</td>
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                >{{ row.desc }}</td>
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                >
                                    <slot :id="row.id" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { reactive } from "vue"

export default {
    props: {
        columns: Array,
        rows: Object
    },

    setup(props) {
        const table = reactive({
            columns: props.columns,
            rows: props.rows
        });

        return {
            table,
        }
    },
}
</script>
