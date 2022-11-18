<template>
  <div class="writing-topic">
    <sib-common-page
      ref="pageComponent"
      :permissions="permissions"
      :main-table-config="mainTableConfig"
      :main-dialog-config="mainDialogConfig">
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
    name: 'WritingTopic',
    data() {
        return {
            permissions: {
                // 查看列表
                view: {
                    url: '/siit-profile-service/patientInsulinInfusion/findBaseAdjustPage',
                    method: 'post',
                    params: {},
                },
                // 列表行新增
                add: {
                    url: '/siit-profile-service/patientInsulinInfusion/saveBase',
                    method: 'post',
                    params: {},
                },
                // 列表行编辑
                edit: {
                    url: '/siit-profile-service/patientInsulinInfusion/saveBase',
                    method: 'post',
                    params: {},
                },
                // 列表行删除
                delete: {
                    url: '/siit-profile-service/patientInsulinInfusion/deleteBase',
                    method: 'post',
                    params: {},
                },
            },
            // 主列表查询配置
            mainTableConfig: {
                size: 'mini',
                indexStyle: 'selection',
                isRefresh: true,
                submitText: '查询结果',
                searchInfo: [
                    {
                        label: '任务名称',
                        code: '1',
                        type: 'text',
                    },
                    {
                        label: '提交时间',
                        code: '2',
                        type: 'date',
                    },
                ],
                // 列表的列配置项
                tableColumn: [
                    {
                        label: '任务编号',
                        code: '1',
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
                        label: '任务模板',
                        code: '31',
                        width: 150,
                    },
                    {
                        label: '任务发布时间',
                        code: 't',
                        width: 120,
                    },
                    {
                        label: '操作',
                        code: 'operate',
                        type: 'slot',
                        width: 90,
                        showOverflowTooltip: false,
                    },
                ],
                buttonConfig: {
                    add: {
                        name: '添加任务',
                    },
                    import: {
                        size: 'mini',
                        maxSize: 20,
                    },
                },
            },
            // 主列表的新增、修改、复制弹窗表单配置
            mainDialogConfig: {
                rowSize: 1,
                // width: '1000px',
                getItemInfo: () => ([
                    {
                        label: '任务名称',
                        code: '1',
                        type: 'text',
                        required: true,
                    },
                    {
                        label: '任务描述',
                        code: '2',
                        type: 'textarea',
                        required: true,
                    },
                    {
                        label: '任务主图',
                        code: 'image',
                        type: 'upload',
                        dataType: 'array',
                        action: 'https://jsonplaceholder.typicode.com/posts/',
                        required: true,
                        accept: 'image/png',
                        limit: 1,
                        maxSize: 2,
                        listType: 'picture-card',
                        showTips: true,
                        onSuccess: (res, file, fileList) => {
                            console.log(res, file, fileList);
                            if (res.code === 400) {
                                this.$message.error('上传失败');
                                return fileList.filter(({ uid }) => uid !== file.uid);
                            }
                            this.$message.success('上传成功');
                            return fileList;
                        },
                        beforeRemove(file) {
                            return this.$confirm(`确定移除 ${file.name}？`);
                        },
                    },
                    {
                        label: '任务模板',
                        code: '4',
                        type: 'textarea',
                        required: true,
                    },
                ]),
                // beforeSubmit: ({ form }) => {
                //     const params = { ...form, patientId: this.id, type: form.type || 2 }
                //     Object.keys(params).forEach((key) => {
                //         if (params[key] === '' && key.includes('infusionDose')) params[key] = null
                //     })
                //     return params
                // }
            },
        };
    },
    methods: {
    },
    created() {
    },
};
</script>

<style lang="scss">
.writing-topic {
    height: 100%;
}
</style>
