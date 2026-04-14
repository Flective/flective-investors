'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/')
      router.refresh()
    } else {
      setError('Incorrect access code')
      setPassword('')
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <div className="login-logo">Flective <span>Investors</span></div>
      <div className="login-sub">Confidential Access</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="pw">Access code</label>
        <input
          id="pw"
          type="password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          autoFocus
          required
        />
        <div className="login-error">{error}</div>
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? '···' : 'Enter'}
        </button>
      </form>
    </main>
  )
}
