<template>
  <header class="header_style">
    <el-row>
      <el-col :span="24" class="d-flex justify-content-evenly align-items-center mt-3">
        <!-- 最新消息 -->
        <div class="w-100 d-flex align-items-center">
          <span style="color: #000" class="material-icons-outlined icon-shape me-2">campaign</span>
          <div style="width: 300px">
            <el-carousel height="20px" direction="vertical" :autoplay="true" indicator-position="none">
              <el-carousel-item v-for="item in translate_News" :key="item">
                <div class="d-flex justify-content-between">
                  <div class="announce-icon d-flex">
                    <h6 justify="center" style="color: #fff">{{ item.title }}</h6>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- Navbar右邊選單 -->
        <div class="l-content me-5">
          <div class="d-flex align-items-center">
            <!-- 夜間模式 -->
            <div class="moon_style d-flex align-items-center">
              <!-- <i class="fa-solid fa-moon fs-4 ms-3"></i
          > -->
              <el-switch
                class="dark_switch"
                :class="[isDark === true ? 'dark_switch' : 'white_switch']"
                v-model="isDark"
                style="--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c"
                @change="toggleMode(isDark)"
              />
            </div>
            <!-- 語言選擇 -->
            <el-dropdown class="ms-3" trigger="click">
              <span class="el-dropdown-link text-white d-flex">
                <img :src="imgSrc" alt="#" class="language_img me-2" />
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="tw_version()"
                    ><img src="../../assets/flag/zh_TW.jpeg" alt="#" class="language_img me-2" /><span>{{ this.$t('Traditional_Chinese') }}</span></el-dropdown-item
                  >
                  <el-dropdown-item @click="cn_version()"
                    ><img src="../../assets/flag/zh_CN.jpeg" alt="#" class="language_img me-2" /><span>{{ this.$t('Simplified_Chinese') }}</span></el-dropdown-item
                  >
                  <el-dropdown-item @click="en_version()"
                    ><img src="../../assets/flag/en_US.jpeg" alt="#" class="language_img me-2" /><span>{{ this.$t('English') }}</span></el-dropdown-item
                  >
                  <el-dropdown-item @click="vn_version()"
                    ><img src="../../assets/flag/vi_VN.jpeg" alt="#" class="language_img me-2" /><span>{{ this.$t('Vietnamese') }}</span></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown class="ms-3" trigger="click" :hide-on-click="false" size="small">
              <span class="el-dropdown-link">
                <el-icon class="el-icon--right">
                  <i class="fa-solid fa-bars fs-2"></i>
                  <arrow-down class="arrow"></arrow-down>
                </el-icon>
              </span>

              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="hamburger_list">test</el-dropdown-item>
                  <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- logo -->
    <div class="d-flex align-items-center mt-5">
      <img class="home_logo" src="../../assets/Logo/logo_kolapay.jpg" alt="#" />
      <h1 class="text-start">KOLA</h1>
      <nav class="navbar-body">
        <ul class="navbar-list d-flex">
          <li class="hot" @mouseenter="mouChange()" @mouseleave="mouChange1()" @blur="mouChange()" @focus="mouChange()">
            <div class="icon-container">熱門<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
            <ul class="sub-nav">
              <li><a href="#">Sub menu1</a></li>
              <li><a href="#">Sub menu2</a></li>
              <li><a href="#">Sub menu3</a></li>
            </ul>
          </li>
          <li class="sport">
            <div class="icon-container">體育<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>

          <li class="real">
            <div class="icon-container">真人<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>

          <li class="poker">
            <div class="icon-container">棋牌<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>

          <li class="digital">
            <div class="icon-container">電子<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>
          <li class="lottery">
            <div class="icon-container">彩票<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>
          <li class="gaming">
            <div class="icon-container">電競<i class="arrow1 fa-solid fa-caret-down ms-1"></i> <i class="arrow2 ms-1 fa-solid fa-caret-up"></i></div>
          </li>
        </ul>
      </nav>
    </div>
    <!-- test -->
    <!-- <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="lang-select-dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
  </header>
</template>

<script>
// import sunLogo from '../../assets/Logo/icons8-moon-and-stars-30.png';
import TW from '../../assets/flag/zh_TW.jpeg';
import CN from '../../assets/flag/zh_CN.jpeg';
import EN from '../../assets/flag/en_US.jpeg';
import VN from '../../assets/flag/vi_VN.jpeg';

export default {
  inject: ['reloadPage'],
  data() {
    return {
      // 是否擴展
      isExpand: true,
      // dark mode
      isDark: true,
      // 圖片來源
      imgSrc: TW,
      // 最新消息列表(自己測試用)
      translate_News: [
        { title: '訊息公告1', content: '內容1' },
        { title: '訊息公告2', content: '內容2' },
        { title: '訊息公告3', content: '內容3' },
      ],
      // header expand
      headerExpand: false,
      // hot
      hotExpand: false,
    };
  },
  methods: {
    // 中文版
    tw_version() {
      this.reloadPage();
      this.$i18n.locale = 'tw';
      this.imgSrc = TW;
    },
    // 簡體中文
    cn_version() {
      this.reloadPage();
      this.$i18n.locale = 'cn';
      this.imgSrc = CN;
    },
    // 英文版
    en_version() {
      this.reloadPage();
      this.$i18n.locale = 'en';
      this.imgSrc = EN;
    },
    // 越南版
    vn_version() {
      this.reloadPage();
      this.$i18n.locale = 'vn';
      this.imgSrc = VN;
    },
    clickMenu(item) {
      this.$store.commit('selectMenu', item);
    },
    clickExpand() {
      if (this.isExpand === true) {
        this.isExpand = false;
      } else {
        this.isExpand = true;
      }
    },
    // 切換Dark模式
    toggleMode(isDark) {
      console.log(isDark);
      if (this.isDark === false) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else if (this.isDark === true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    },
    // 滑鼠移入
    mouChange() {
      this.headerExpand = true;
      this.hotExpand = true;
    },
    // 滑鼠移出
    mouChange1() {
      this.headerExpand = false;
      this.hotExpand = false;
    },
  },
  created() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    console.log(currentTheme);
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        this.isDark = true;
        // toggleSwitch.checked = true;
      } else {
        this.isDark = false;
      }
    }
    if (this.$i18n.locale === 'en') {
      this.imgSrc = EN;
    }
    if (this.$i18n.locale === 'tw') {
      this.imgSrc = TW;
    }
    if (this.$i18n.locale === 'cn') {
      this.imgSrc = CN;
    }
    if (this.$i18n.locale === 'vn') {
      this.imgSrc = VN;
    }
  },
};
</script>

<style lang="scss" scoped>
// LOGO樣式
.home_logo {
  border-radius: 10px;
  width: 70px;
  // margin: 8px 25px 24px 40px;
  margin-right: 20px;
  background: black;
  // box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
  // -webkit-box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
  // -moz-box-shadow: -1px 1px 24px 4px var(--logo-shadow-color);
}
// 玩具KOLA
.text-start {
  color: var(--font-color);
}
.el-button {
  padding: 5px 5px;
}
.header_style {
  // height: 350px !important;
  background: var(--heading-color);
  // align-items: flex-start;
  padding: 0 300px 10px;
  // display: inline-block;
  position: relative;
  display: flex;
  flex-direction: column;
}
.header_style2 {
  // background: #4285f4;
  height: 450px !important;
  // animation: ;
}
.arrow {
  font-size: 20px;
  color: white;
}

.moon_style {
  :deep(.el-switch__core .el-switch__action) {
    background-image: url('../../assets/Logo/icons8-moon-and-stars-30.png') !important;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

.el-dropdown-link {
  margin-right: 30px;
}
.el-icon--right i {
  color: var(--font-color);
}
.hamburger_style {
  a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
  }
  &:hover {
    // background: linear-gradient(90deg, rgba(238, 133, 46, 0.19091386554621848) 0%, rgba(252, 241, 69, 0.05926120448179273) 100%);
    & i::before {
      color: #faa30d;
    }
    a {
      color: #faa30d;
      // background-color: var(--text-color);
    }
  }
}
a {
  align-items: center;
  width: 100%;
  color: var(--font-color);
  text-decoration: none;
}
.icon-shape {
  width: 25px;
  height: 25px;
  background-position: 50%;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
// 語言圖片樣式
.language_img {
  width: 30px;
  height: 20px;
}
$yellow: #f4d03f;
$blue: #16a085;
$gradient-bg: linear-gradient(90deg, $blue, $yellow);
$transparent-gray: rgba(0, 0, 0, 0.3);
$transparent-white: rgba(255, 255, 255, 0.15);

.navbar-body {
  padding: 0px 0 0 0;
  .navbar-list {
    color: #fff;
    margin: 0 auto;
    max-width: 1132px;
    li {
      margin-left: 30px;
      list-style: none;
      & .icon-container {
        display: flex;
      }
      & :hover {
        color: rgb(223, 31, 31);
        transition: 0.7ms;
        i {
          color: rgb(223, 31, 31);
        }
      }
      .icon-container:hover i:nth-child(1) {
        display: none;
      }

      .icon-container:hover i:nth-child(2) {
        display: block;
      }
      .icon-container i:nth-child(2) {
        display: none;
      }
    }
    // 展開式窗
    // .dropDown-menu {
    //   cursor: default;
    //   position: absolute;
    //   width: 100%;
    //   height: 100px;
    //   overflow: hidden;
    //   transition: height 0.5s;
    //   top: 100px;
    //   left: 0;
    //   right: 0;
    //   z-index: 99;
    //   background: #1f2022;
    // }
    // .dropdown-menu li:hover .sub-menu {
    //   visibility: visible;
    // }
    // .dropdown:hover .dropdown-menu {
    //   display: block;
    // }
    .menu-item {
      display: inline-block;
      background-color: #4285f4;
      position: relative;
    }

    .menu-item a {
      text-decoration: none;
      padding: 6px 10px;
      color: #fff;
      display: block;
    }

    .drop-menu {
      display: none;
      position: absolute;
      background-color: #fff;
      min-width: 300px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .drop-menu-item {
      width: 100%;
    }

    .drop-menu-item:hover {
      background-color: #eee;
    }

    .drop-menu-item a {
      color: #555;
    }

    .menu-item:hover .drop-menu {
      display: block;
    }
  }
  /* == Level 1 == */
  > ul {
    > li {
      display: inline-block;
      position: relative;
      padding: 10px;
      padding-bottom: 20px;
      z-index: 100;

      /* == Level 2 == */
      > ul {
        position: absolute;
        left: 0;
        top: 100%;
        padding: 10px 1000em; /* trick from css-tricks comments */
        margin: 0px -1000em 0; /* trick from css-tricks comments */
        z-index: 101;
        visibility: hidden;
        opacity: 0;
        background: #f00;

        > li {
          padding: 5px 0;
          list-style: none;
          margin: 0 12px;
          min-width: 250px;

          a {
            color: #fff;
            text-shadow: 1px 1px #555;
          }
        }
      }
      &:hover > ul {
        visibility: visible;
        opacity: 1;
        transition: all 0.5s;
      }
    }
  }
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
//   // transition: opacity 0.5s;
// }
// .fade-enter-active {
//   transition: all 0.3s ease;
// }
</style>
