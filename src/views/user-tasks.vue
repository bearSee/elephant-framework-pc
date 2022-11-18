<template>
  <div class="user-tasks">
    <sib-common-page
      ref="pageComponent"
      :permissions="permissions"
      :main-table-config="mainTableConfig">
      <template #operate="{ row }">
        <el-button
          type="text"
          @click.native="handlerViewDetail(row)">
          书写详情
        </el-button>
      </template>
      <template #image="{ row }">
        <el-image
          :src="row.image"
          :preview-src-list="[row.image]">
          <template slot="error">
            暂无图片
          </template>
        </el-image>
      </template>
    </sib-common-page>
  </div>
</template>

  <script>

export default {
    name: 'UserTasks',
    data() {
        return {
            permissions: {
                // 查看列表
                // view: {
                //     url: '',
                //     method: 'post',
                //     params: {}
                // },
                export: {
                    url: '/siit-profile-service/patientInsulinInfusion/exportBaseAdjustDose',
                    method: 'post',
                    params: {},
                },
            },
            // 主列表查询配置
            mainTableConfig: {
                size: 'mini',
                indexStyle: 'selection',
                isRefresh: true,
                expandAll: true,
                submitText: '查询结果',
                searchInfo: [
                    {
                        label: '用户ID',
                        code: '1',
                        type: 'text',
                    },
                    {
                        label: '任务名称',
                        code: '11',
                        type: 'text',
                    },
                    {
                        label: '提交时间',
                        code: '2',
                        type: 'date',
                    },
                    {
                        label: '手机号',
                        code: '121',
                        type: 'text',
                        valueType: 'number',
                    },
                ],
                // 列表的列配置项
                tableColumn: [
                    {
                        label: '用户ID',
                        code: '11',
                    },
                    {
                        label: '手机号',
                        code: '121',
                    },
                    {
                        label: '任务名称',
                        code: '2',
                    },
                    {
                        label: '任务主图',
                        code: 'image',
                        type: 'slot',
                    },
                    {
                        label: '任务描述',
                        code: '3',
                        width: 150,
                    },
                    {
                        label: '提交时间',
                        code: 't',
                        width: 120,
                    },
                    {
                        label: '操作',
                        code: 'operate',
                        type: 'slot',
                        showOverflowTooltip: false,
                    },
                ],
                tableData: [{}],
                buttonConfig: {
                    export: {
                        name: '导出Excel',
                    },
                },
            },
        };
    },
    methods: {
        handlerViewDetail({ id }) {
            this.$router.push({
                path: '/taskDetail',
                query: { id },
            });
        },
    },
    created() {
    },
};
  </script>

  <style lang="scss">
  .user-tasks {
      height: 100%;
  }
  </style>
