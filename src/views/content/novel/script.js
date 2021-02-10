import ListofNovels from '@/views/content/novel/listofNovels/index'; // 小说列表
import Classification from '@/views/content/novel/classification/index'; // 小说列表
import Uploadstatus from '@/views/content/novel/uploadstatus/index'; // 上传状态
import Major from '@/views/content/novel/major/index'; // 大类别
import Limited from '@/views/content/novel/limited/index'; // 限免小说
export default {
  data() {
    return {
      activeName: 'first',
    }
  },
  components: {
    'ListofNovels': ListofNovels,
    'Classification': Classification,
    'Uploadstatus': Uploadstatus,
    'Major': Major,
    'Limited': Limited,
  }
}