import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Trash2, Plus, Settings, RotateCcw } from 'lucide-react'
import './App.css'

function App() {
  const [items, setItems] = useState(['獎勵金 10元', '獎勵金 20元', '額外點心', '選擇晚餐', '延後睡覺30分鐘', '看卡通30分鐘'])
  const [newItem, setNewItem] = useState('')
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const wheelRef = useRef(null)

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
    '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
  ]

  const addItem = () => {
    if (newItem.trim() && items.length < 12) {
      setItems([...items, newItem.trim()])
      setNewItem('')
    }
  }

  const removeItem = (index) => {
    if (items.length > 2) {
      setItems(items.filter((_, i) => i !== index))
    }
  }

  const spinWheel = () => {
    if (isSpinning || items.length === 0) return

    setIsSpinning(true)
    setResult('')

    // 隨機選擇結果
    const randomIndex = Math.floor(Math.random() * items.length)
    const selectedItem = items[randomIndex]

    // 計算旋轉角度
    const segmentAngle = 360 / items.length
    const targetAngle = 360 - (randomIndex * segmentAngle + segmentAngle / 2)
    const spins = 5 + Math.random() * 5 // 5-10圈
    const finalAngle = spins * 360 + targetAngle

    // 應用旋轉動畫
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'transform 4s cubic-bezier(0.23, 1, 0.32, 1)'
      wheelRef.current.style.transform = `rotate(${finalAngle}deg)`
    }

    // 4秒後顯示結果
    setTimeout(() => {
      setIsSpinning(false)
      setResult(selectedItem)
    }, 4000)
  }

  const resetWheel = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transition = 'none'
      wheelRef.current.style.transform = 'rotate(0deg)'
    }
    setResult('')
  }

  const renderWheel = () => {
    const segmentAngle = 360 / items.length

    return (
      <div className="wheel-container">
        <div className="wheel-pointer"></div>
        <div 
          ref={wheelRef}
          className="wheel"
          style={{
            width: '400px',
            height: '400px',
            background: 'conic-gradient(' + 
              items.map((_, index) => {
                const startAngle = (index * segmentAngle)
                const endAngle = ((index + 1) * segmentAngle)
                return `${colors[index % colors.length]} ${startAngle}deg ${endAngle}deg`
              }).join(', ') + ')'
          }}
        >
          {items.map((item, index) => {
            const angle = index * segmentAngle
            const textAngle = angle + segmentAngle / 2
            
            // 計算文字在輪盤上的位置
            const radius = 120 // 文字距離中心的距離
            const radian = (textAngle * Math.PI) / 180
            const x = Math.cos(radian) * radius
            const y = Math.sin(radian) * radius
            
            return (
              <div
                key={index}
                className="wheel-segment"
                style={{
                  position: 'absolute',
                  top: `${200 + y}px`,
                  left: `${200 + x}px`,
                  transform: `translate(-50%, -50%) rotate(${textAngle}deg)`,
                  transformOrigin: 'center',
                  width: '100px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  pointerEvents: 'none'
                }}
              >
                {item}
              </div>
            )
          })}
        </div>
        <div className="wheel-center">
          <RotateCcw size={24} color="#333" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🎯 孩子獎勵抽獎輪盤
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 輪盤區域 */}
          <div className="flex flex-col items-center space-y-6">
            {renderWheel()}
            
            <div className="flex space-x-4">
              <Button 
                onClick={spinWheel}
                disabled={isSpinning || items.length === 0}
                className="spin-button"
                size="lg"
              >
                {isSpinning ? '轉動中...' : '開始抽獎！'}
              </Button>
              
              <Button 
                onClick={resetWheel}
                variant="outline"
                size="lg"
                className="bg-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                重置
              </Button>
            </div>

            {result && (
              <div className="result-display">
                <h2 className="text-2xl font-bold mb-2">🎉 恭喜！</h2>
                <p className="text-xl">{result}</p>
              </div>
            )}
          </div>

          {/* 設定區域 */}
          <div className="space-y-6">
            <Card className="settings-panel">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  獎勵項目設定
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="輸入新的獎勵項目..."
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={addItem}
                    disabled={!newItem.trim() || items.length >= 12}
                    size="sm"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  目前項目數量: {items.length}/12
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {items.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      <span 
                        className="flex-1 text-sm"
                        style={{ color: colors[index % colors.length] }}
                      >
                        {item}
                      </span>
                      <Button
                        onClick={() => removeItem(index)}
                        variant="ghost"
                        size="sm"
                        disabled={items.length <= 2}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="settings-panel">
              <CardHeader>
                <CardTitle>使用說明</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p>• 點擊「開始抽獎」按鈕轉動輪盤</p>
                <p>• 輪盤會自動減速並停止在隨機位置</p>
                <p>• 可以自訂獎勵項目（最多12個）</p>
                <p>• 至少需要2個項目才能開始抽獎</p>
                <p>• 點擊「重置」可以讓輪盤回到初始位置</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

