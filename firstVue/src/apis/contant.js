export const BASE_URL = 'UTCS_Platform'
// export const WEB_SOCKET_URI = 'WEB_SOCKET_URI'
// export const SYS_URL = 'SystemConfig'

export const OBJ_TYPE = {
  'objATMSVIP': 0x1010,         // ATMS系统特勤
  //  0x2000~0x2FFF为UTC
  'objUTCNODE': 0x2001,         // 信号机控制节点
  'objCONTROLLER': 0x2010,      // 信号机
  'objLCLIGHT': 0x2020,         // 信号灯
  'objSUBAREA': 0x2030,         // 子区
  'objARROW': 0x2040,           // 箭头（相位编辑中使用）
  'objUTCCROSSVIP': 0x2050,     // 单个路口特勤
  'objUTCAREAVIP': 0x2060,      // 子区特勤
  'objMONITORAREA': 0x2070,     // 区域监视
  // 0x3000~0x3FFF为TNS
  'objTNSNODE': 0x3000,         // TNS节点
  'objLENS': 0x3001,            // 镜头
  'objPANTILT': 0x3010,         // 云台
  'objCORVER': 0x3020,          // 防护罩
  'objRECEIVER': 0x3030,        // 解码器
  'objSWITCHER': 0x3040,        // 矩阵切换器
  'objRLC': 0x3050,             // 视频闯红灯控制节点
  'objRLCNODE': 0x3055,         // 国道监控点
  'objCAMERA': 0x3060,          // 摄像机
  'objMONITOR': 0x3065,         // 监视器
  'objALARM': 0x3070,       // 告警设备
  'objAUX': 0x3075,             // 辅助设备
  'objTNSNODEVIP': 0x3076,      // 单个设备特勤
  // 0x4000~0x4FFF为TFI
  'objLANE': 0x4001,            // 车道
  'objTFINODE': 0x4010,         // TFI监测点
  'objVEHICLE': 0x4020,         // 车辆
  'objDevice': 0x4030,          // 检测设备
  'objLOOP': 0x4032,            // 线圈
  'objDIRECTION': 0x4040,       // 道路的某一个方向
  'objCROSS': 0x4050,           // 路口
  'objROAD': 0x4060,            // 路段或道路
  'objChannel': 0x4051,         // 渠化
  // 0x5000~0x5FFF为TIS
  'objLEDSIGN': 0x5001,         // LED屏
  'objSPEAKERNODE': 0x5010,     // 路口喊话设备节点
  'objSPEAKER': 0x5020,         // 路口喊话设备
  // 0x8000~0x8FFF为GIS
  'objTRAFFICSIGN': 0x8010,     // 交通标志
  'objTRAFFICLINE': 0x8020,     // 交通标线
  'objLIGHT': 0x8030,           // 路灯
  // 0x9000~0x9FFF公安
  'objTRAFFICCENTER': 0x9005,   // 指挥中心
  'objGONGANJU': 0x9010,        // 公安局
  'objFENJU': 0x9020,           // 分局
  'objPAICHUSUO': 0x9030,       // 派出所
  'objZHIDUI': 0x3035,          // 支队
  'objDADUI': 0x9040,           // 大队
  'objZHONGDUI': 0x9050,        // 中队
  'objPOLICE': 0x9055,          // 警察
  'objPOLICECAR': 0x9060,       // 警车
  'objPOLICEPLANVIP': 0x9070    // 警力特勤
}
