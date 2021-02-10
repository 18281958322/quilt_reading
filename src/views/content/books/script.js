import ListofNovels from '@/views/content/novel/listofNovels/index'; // 小说列表
import Classification from '@/views/content/novel/classification/index'; // 小说列表
import Major from '@/views/content/novel/major/index'; // 大类别
export default {
  data() {
    return {
      activeName: 'first',
    }
  },
  components: {
    'ListofNovels': ListofNovels,
    'Classification': Classification,
    'Major': Major,
  }
}