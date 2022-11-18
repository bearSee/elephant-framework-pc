<template>
  <div class="task-detail">
    <div class="detail-head">
      <div class="title">
        用户书写详情
      </div>
      <div class="button-group">
        <el-button
          icon="el-icon-close"
          @click.native="$router.go(-1)">
          关闭
        </el-button>
        <el-button
          icon="el-icon-refresh-right"
          @click.native="handlerRefresh">
          刷新
        </el-button>
      </div>
    </div>
    <div class="detail-body">
      <div class="body-left">
        321
      </div>
      <div class="body-right">
        123
      </div>
    </div>
  </div>
</template>

  <script>

export default {
    name: 'TaskDetail',
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    },
};
  </script>

  <style lang="scss">
  @import "@/assets/styles/scss/theme.scss";

  .task-detail {
      height: 100%;
      .detail-head {
        display: flex;
        justify-content: space-between;
        height: 32px;
        .title {
            font-size: 18px;
            margin: auto 0;
            &::before {
                content: '';
                display: inline-block;
                width: 5px;
                height: 18px;
                background: $theme;
                vertical-align: top;
            }
        }
      }
      .detail-body {
        height: calc(100% - 32px);
        padding: 10px 0;
        display: flex;
        .body-left {
            flex: 1 1 auto;
            padding: 15px;
            background: #fff;
            margin-right: 15px;
            height: 100%;
            overflow-y: auto;
        }
        .body-right {
            width: 250px;
            height: 100%;
            overflow-y: auto;
            padding: 15px;
            background: #fff;
        }
      }
  }
  </style>
