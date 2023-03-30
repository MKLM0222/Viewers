const ctAXIAL = {
  viewportOptions: {
    viewportId: 'ctAXIAL',
    viewportType: 'volume',
    orientation: 'axial',
    toolGroupId: 'ctToolGroup',
    initialImageOptions: {
      // index: 5,
      preset: 'first', // 'first', 'last', 'middle'
    },
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'axialSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: true,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
  ],
};

const ctSAGITTAL = {
  viewportOptions: {
    viewportId: 'ctSAGITTAL',
    viewportType: 'volume',
    orientation: 'sagittal',
    toolGroupId: 'ctToolGroup',
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'sagittalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: true,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
  ],
};
const ctCORONAL = {
  viewportOptions: {
    viewportId: 'ctCORONAL',
    viewportType: 'volume',
    orientation: 'coronal',
    toolGroupId: 'ctToolGroup',
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'coronalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: true,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
  ],
};

const ptAXIAL = {
  viewportOptions: {
    viewportId: 'ptAXIAL',
    viewportType: 'volume',
    background: [1, 1, 1],
    orientation: 'axial',
    toolGroupId: 'ptToolGroup',
    initialImageOptions: {
      // index: 5,
      preset: 'first', // 'first', 'last', 'middle'
    },
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'axialSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: true,
        target: false,
      },
    ],
  },
  displaySets: [
    {
      options: {
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
        voiInverted: true,
      },
      id: 'ptDisplaySet',
    },
  ],
};

const ptSAGITTAL = {
  viewportOptions: {
    viewportId: 'ptSAGITTAL',
    viewportType: 'volume',
    orientation: 'sagittal',
    background: [1, 1, 1],
    toolGroupId: 'ptToolGroup',
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'sagittalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: true,
        target: false,
      },
    ],
  },
  displaySets: [
    {
      options: {
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
        voiInverted: true,
      },
      id: 'ptDisplaySet',
    },
  ],
};

const ptCORONAL = {
  viewportOptions: {
    viewportId: 'ptCORONAL',
    viewportType: 'volume',
    orientation: 'coronal',
    background: [1, 1, 1],
    toolGroupId: 'ptToolGroup',
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'coronalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: true,
        target: false,
      },
    ],
  },
  displaySets: [
    {
      options: {
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
        voiInverted: true,
      },
      id: 'ptDisplaySet',
    },
  ],
};

const fusionAXIAL = {
  viewportOptions: {
    viewportId: 'fusionAXIAL',
    viewportType: 'volume',
    orientation: 'axial',
    toolGroupId: 'fusionToolGroup',
    initialImageOptions: {
      // index: 5,
      preset: 'first', // 'first', 'last', 'middle'
    },
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'axialSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: false,
        target: true,
      },
      {
        type: 'voi',
        id: 'fusionWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: false,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
    {
      options: {
        colormap: 'hsv',
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
      },
      id: 'ptDisplaySet',
    },
  ],
};

const fusionSAGITTAL = {
  viewportOptions: {
    viewportId: 'fusionSAGITTAL',
    viewportType: 'volume',
    orientation: 'sagittal',
    toolGroupId: 'fusionToolGroup',
    // initialImageOptions: {
    //   index: 180,
    //   preset: 'middle', // 'first', 'last', 'middle'
    // },
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'sagittalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: false,
        target: true,
      },
      {
        type: 'voi',
        id: 'fusionWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: false,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
    {
      options: {
        colormap: 'hsv',
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
      },
      id: 'ptDisplaySet',
    },
  ],
};

const fusionCORONAL = {
  viewportOptions: {
    viewportId: 'fusionCoronal',
    viewportType: 'volume',
    orientation: 'coronal',
    toolGroupId: 'fusionToolGroup',
    // initialImageOptions: {
    //   index: 180,
    //   preset: 'middle', // 'first', 'last', 'middle'
    // },
    syncGroups: [
      {
        type: 'cameraPosition',
        id: 'coronalSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ctWLSync',
        source: false,
        target: true,
      },
      {
        type: 'voi',
        id: 'fusionWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: false,
        target: true,
      },
    ],
  },
  displaySets: [
    {
      id: 'ctDisplaySet',
    },
    {
      options: {
        colormap: 'hsv',
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
      },
      id: 'ptDisplaySet',
    },
  ],
};

const mipSAGITTAL = {
  viewportOptions: {
    viewportId: 'mipSagittal',
    viewportType: 'volume',
    orientation: 'sagittal',
    background: [1, 1, 1],
    toolGroupId: 'mipToolGroup',
    syncGroups: [
      {
        type: 'voi',
        id: 'ptWLSync',
        source: true,
        target: true,
      },
      {
        type: 'voi',
        id: 'ptFusionWLSync',
        source: true,
        target: false,
      },
    ],

    // Custom props can be used to set custom properties which extensions
    // can react on.
    customViewportProps: {
      // We use viewportDisplay to filter the viewports which are displayed
      // in mip and we set the scrollbar according to their rotation index
      // in the cornerstone extension.
      hideOverlays: true,
    },
  },
  displaySets: [
    {
      options: {
        blendMode: 'MIP',
        slabThickness: 'fullVolume',
        voi: {
          windowWidth: 5,
          windowCenter: 2.5,
        },
        voiInverted: true,
      },
      id: 'ptDisplaySet',
    },
  ],
};

export {
  ctAXIAL,
  ctSAGITTAL,
  ctCORONAL,
  ptAXIAL,
  ptSAGITTAL,
  ptCORONAL,
  fusionAXIAL,
  fusionSAGITTAL,
  fusionCORONAL,
  mipSAGITTAL,
};
